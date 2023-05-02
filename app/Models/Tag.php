<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'position',
        'visible',
        'tag_id'
    ];

    public function parent()
    {
        return $this->belongsTo(Tag::class,'tag_id')->where('tag_id',0)->with('parent') ;
    }

    public function children()
    {
        return $this->hasMany(Tag::class,'tag_id')->with('children');
    }

    public function contents(): BelongsToMany
    {
        return $this->belongsToMany(Content::class);
    }
}
