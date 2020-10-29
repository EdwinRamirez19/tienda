<?php

use Illuminate\Database\Seeder;
use Caffeinated\Shinobi\Models\Role;
use App\User;
use App\RoleUser;

class UsersTableSeeder extends Seeder
{
    
    public function run()
    {
         
        // factory(App\User::class, 1)->create();

        User::create([
            'name' => 'Administrador',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345'),
        ]);

        Role::create([
            'name'    =>'Admin',
            'slug'    =>'admin',
            'special' =>'all-access'
        ]);

        // Role::create([
        //     'name'    =>'Medico',
        //     'slug'    =>'medico',
            
        // ]);

        // Role::create([
        //     'name'    =>'Transcriptora',
        //     'slug'    =>'Transcriptora',
            
        // ]);
        
        // Role::create([
        //     'name'    =>'Tecnologos',
        //     'slug'    =>'Tecnologos',
            
        // ]);
        // Role::create([
        //     'name'    =>'Recepcionista',
        //     'slug'    =>'Recepcionista',
            
        // ]);
        RoleUser::create([
            'role_id' => 1,
            'user_id' => 1
        ]);
        
    }
}
