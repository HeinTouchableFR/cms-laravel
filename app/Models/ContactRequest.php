<?php

namespace App\Models;

use geertw\IpAnonymizer\IpAnonymizer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactRequest extends Model
{
    use HasFactory;

    public $fillable = [
        'ip'
    ];

    public function setRawIp(?string $ip): self
    {
        $this->ip = (new IpAnonymizer())->anonymize($ip);
        return $this;
    }
}
