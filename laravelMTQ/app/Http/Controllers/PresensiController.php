<?php

namespace App\Http\Controllers;

use App\Models\Presensi;
use App\Http\Requests\StorePresensiRequest;
use App\Http\Requests\UpdatePresensiRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PresensiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    public function showPresensi(Request $request)
    {
        $id_categori = $request->input('id_categori');
        $date = $request->input('date');

        $data = Presensi::where('id_categori', $id_categori )
        ->whereDate('date', $date)
        ->first();

        return $data ? response()->json(['data' => $data]) : response()->json(['data' => []], 404);
    }

    public function showPresensiUsr(Request $request)
    {
        $status = $request->input('status');

        $data = DB::table('presensis')
        ->join('users AS teacher', 'presensis.id_teacher', '=', 'teacher.id')
        ->join('categories', 'presensis.id_categori', '=', 'categories.id')
        ->select('presensis.*', 'teacher.name AS teacher', 'categories.name AS categori', 'categories.fromHour', 'categories.untilHour')
        ->where('status', $status)
        ->get();

        return $data ? response()->json(['data' => $data]) : response()->json(['data' => []], 404);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_teacher' => 'required',
            'id_categori' => 'required',
            'date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $index = new Presensi();
        $index->id_teacher = $request->id_teacher;
        $index->id_categori = $request->id_categori;
        $index->date = $request->date;
        $index->save();

        return response()->json(['data' => $index]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Presensi $presensi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Presensi $presensi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $index = Presensi::find($request->id);

        if(!$index) return response()->json("data not found", 404);

        $index->status = 1;
        $index->save();

        
        return response()->json($index, 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Presensi $presensi)
    {
        //
    }
}
