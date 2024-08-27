<?php

namespace Database\Seeders;

use App\Constant\RoleConstants;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Roles
        Role::create(['name' => RoleConstants::SUPER_ADMIN]);
        Role::create(['name' => RoleConstants::ADMIN]);
        Role::create(['name' => RoleConstants::USER]);

        // Permissions
        $publishReports = Permission::Create(['name' => 'publish reports']);
        $publishReports->syncRoles([RoleConstants::SUPER_ADMIN, RoleConstants::ADMIN]);
    }
}
