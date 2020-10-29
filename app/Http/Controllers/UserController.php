<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Caffeinated\Shinobi\Models\Role;
use App\User;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    // public function __construct(){
    //     $this->middleware('auth');
    // }

    public function index(){
        
        $users = User::latest()->paginate();
        return view('users.index', compact('users'));
    }

    public function create(){
        $roles = Role::get();
        return view('users.create',compact('roles'));
    }

    public function store(UserStoreRequest $request, User $user){
        User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'identificacion'=>$request->identificacion,
            'password' => Hash::make($request['password']),
            'password_confirmation' => Hash::make($request['password_confirmation']),
        ]);
    
        return redirect()->route('users.index')->with('crear', 'Usuario Creado con Éxito !!');
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user){
        
        return view('users.show',compact('user'));
    }
    public function getUsers(){

        return response()->json(User::all());
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user){

        $roles = Role::get();
        
        return view('users.edit',compact('user','roles'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update( UserUpdateRequest $request, User $user){

      //actualizar usuario
       $user->update($request->all());
       

      // actualizar roles

       $user->roles()->sync($request->get('roles'));
       

       return redirect()->route('users.index', $user->id)
       ->with('editar', 'Usuario Actualizado con Éxito !!');;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
  public function destroy(User $user){

        $user->delete();

        return redirect()->route('users.index')
        ->with('eliminar', 'Usuario Eliminado con Éxito !!');;
    }

}
