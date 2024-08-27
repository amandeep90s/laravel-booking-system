<?php

namespace Database\Seeders;

use App\Constant\RoleConstants;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdmin = User::factory()->create();
        $superAdmin->assignRole(RoleConstants::SUPER_ADMIN);
    }
}
