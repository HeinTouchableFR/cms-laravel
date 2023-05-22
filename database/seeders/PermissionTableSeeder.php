<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'content-list',
            'content-create',
            'content-edit',
            'content-delete',
            'user-list',
            'user-create',
            'user-edit',
            'user-delete',
            'category-list',
            'category-create',
            'category-edit',
            'category-delete',
            'tag-list',
            'tag-create',
            'tag-edit',
            'tag-delete',
            'option-list',
            'option-edit',
            'theme-list',
            'theme-upload',
            'theme-delete',
            'access-administration',
            'extension-list',
            'extension-upload',
            'extension-toggle',
            'extension-delete',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
