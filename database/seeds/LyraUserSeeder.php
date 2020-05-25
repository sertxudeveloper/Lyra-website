<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
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
        $user = new User();
        $user->name = "Lyra Demo";
        $user->email = "lyra@sertxu.dev";
        $user->password = Hash::make('secret');
        $user->save();
    }
}
