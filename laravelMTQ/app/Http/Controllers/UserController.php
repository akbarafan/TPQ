<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email )
        ->where('password', $password)
        ->first();

        return $user ? response()->json(['data' => $user]) : response()->json(['message' => 'User tidak ditemukan'], 404);
    }
}
