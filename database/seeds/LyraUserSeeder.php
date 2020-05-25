<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use SertxuDeveloper\Lyra\Models\Permission;
use SertxuDeveloper\Lyra\Models\Role;
use SertxuDeveloper\Lyra\Models\User;

class LyraUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role = new Role();
        $role->name = "Administrator";
        $role->save();

        $user = new User();
        $user->role()->associate($role);
        $user->name = "Lyra Demo";
        $user->email = "lyra@sertxu.dev";
        $user->password = Hash::make('secret');
        $user->save();

        foreach (config('lyra.menu') as $element) {
            if ($element['key'] == 'lyra') continue;

            if (isset($element['resource'])) {
                foreach (['read', 'write', 'delete'] as $action) {
                    Permission::create(['role_id' => $role->id, 'resource_key' => $element['key'], 'action' => $action]);
                }
            } else {
                Permission::create(['role_id' => $role->id, 'resource_key' => $element['key'], 'action' => 'read']);
            }

        }
    }
}
