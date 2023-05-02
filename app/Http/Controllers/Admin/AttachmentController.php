<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UploadAttachmentRequest;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AttachmentController extends Controller
{
    public function folders(): array
    {
        $data = DB::table('attachments')
            ->select(DB::raw('EXTRACT(MONTH FROM created_at) as month, EXTRACT(YEAR FROM created_at) as year, COUNT(id) as count'))
            ->groupBy('month', 'year')
            ->orderBy('month', 'DESC')
            ->orderBy('year', 'DESC')
            ->get();

        return array_map(fn(array $row) => [
            'path' => $row['year'] . '/' . str_pad((string)$row['month'], 2, '0', STR_PAD_LEFT),
            'count' => $row['count'],
        ], json_decode($data->toJson(), true));
    }

    public function files(Request $request): \Illuminate\Support\Collection
    {
        $params = $request->all();
        if (array_key_exists('q', $params)) {
            return $this->search($params['q'])->map([$this, 'normalize']);
        } else if (array_key_exists('path', $params)) {
            return $this->findForPath($params['path'])->map([$this, 'normalize']);
        } else {
            return $this->findLatest()->map(function ($item) {
                return $this->normalize($item);
            });
        }
    }


    public function search(string $q): \Illuminate\Support\Collection
    {
        return Attachment::where('filename', 'LIKE', '%' . $q . '%')
            ->orderBy('created_at', 'DESC')
            ->limit(25)
            ->get();
    }

    public function findForPath(string $path): \Illuminate\Support\Collection
    {
        $parts = explode('/', $path);
        $start = new \DateTimeImmutable("{$parts[0]}-{$parts[1]}-01");
        $end = $start->modify('+1 month -1 second');

        return Attachment::whereBetween('created_at', [$start, $end])
            ->orderBy('created_at', 'DESC')
            ->limit(50)
            ->get();
    }

    public function findLatest(): \Illuminate\Support\Collection
    {
        return Attachment::orderBy('created_at', 'DESC')
            ->limit(25)
            ->get();
    }

    public function update(?Attachment $attachment, UploadAttachmentRequest $request)
    {
        $validated = $request->validated();

        if (!$validated) {
            return;
        }

        if (null === $attachment) {
            $attachment = new Attachment();
        }

        $file = $request->file('file');
        $path = $file->store('attachments', 'public');

        $attachment->filename = $path;
        $attachment->filesize = $request->file('file')->getSize();;

        $attachment->id ? $attachment->syncChanges() : $attachment->save();

        return $this->normalize($attachment);
    }

    public function destroy(Attachment $attachment): \Illuminate\Http\JsonResponse
    {
        $attachment->delete();
        return response()->json([]);
    }

    public function normalize(Attachment $attachment): array
    {
        $info = pathinfo($attachment->filename);
        $disk = Storage::disk('public');
        $filename = $info['filename'];
        $extension = $info['extension'] ?? '';

        return [
            'id' => $attachment->id,
            'createdAt' => $attachment->created_at,
            'name' => "{$filename}.{$extension}",
            'size' => $attachment->filesize,
            'url' => $disk->url($attachment->filename),
            'thumbnail' => $attachment->resize(250, 100),
        ];
    }
}
