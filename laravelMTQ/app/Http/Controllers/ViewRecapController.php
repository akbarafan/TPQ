<?php

namespace App\Http\Controllers;

use App\Models\ViewRecap;
use Illuminate\Http\Request;

class ViewRecapController extends Controller
{
    
    public function showRecapTcr(Request $request){
        
        $id_teacher = $request->input('id_teacher');
        $id_categori = $request->input('id_categori');

        $data = ViewRecap::where('id_teacher', $id_teacher )
        ->where('id_categori', $id_categori)
        ->get();

        return $data ? response()->json(['data' => $data]) : response()->json(['message' => 'User tidak ditemukan'], 404);
    }

    public function showRecapUsr(Request $request){
        
        $id_user = $request->input('id_user');

        $data = ViewRecap::where('id_user', $id_user )
        ->get();

        return $data ? response()->json(['data' => $data]) : response()->json(['message' => 'User tidak ditemukan'], 404);
    }
}
