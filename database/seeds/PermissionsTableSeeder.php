<?php

use Illuminate\Database\Seeder;
use App\Permission;

class PermissionsTableSeeder extends Seeder
{
    
    public function run()
    {
        //User
        Permission::create([
        	'name'        => 'Navegar usuarios',
        	'slug'        => 'users.index',
        	'description' => 'Lista y navega todos los usuarios del sistema',
        ]);

        Permission::create([
        	'name'        => 'Ver detalle de usuario',
        	'slug'        => 'users.show',
        	'description' => 'Ver en detalle aca usuario del sistema',
        ]);


        Permission::create([
        	'name'        => 'Edicion de usuario',
        	'slug'        => 'users.edit',
        	'description' => 'Editar cualquier dato de un usuario del sistema',
        ]);

        Permission::create([
        	'name'        => 'Eliminar usuario',
        	'slug'        => 'users.destroy',
        	'description' => 'Eliminar cualquier usuario del sistema',
        ]);

        //Roles
        Permission::create([
        	'name'        => 'Navegar usuario roles',
        	'slug'        => 'roles.index',
        	'description' => 'Lista y navega todos los roles del sistema',
        ]);

        Permission::create([
        	'name'        => 'Ver detalle del rol',
        	'slug'        => 'roles.show',
        	'description' => 'Ver en detalle aca rol del sistema',
        ]);

        Permission::create([
        	'name'        => 'Creacion de roles',
        	'slug'        => 'roles.create',
        	'description' => 'Crear un rol en el sistema',
        ]);

        Permission::create([
        	'name'        => 'Edicion de roles',
        	'slug'        => 'roles.edit',
        	'description' => 'Editar cualquier dato de un rol del sistema',
		]);
		
        Permission::create([
        	'name'        => 'Eliminar rol',
        	'slug'        => 'roles.destroy',
        	'description' => 'Eliminar cualquier rol del sistema',
		]);

		
		
	}
}
