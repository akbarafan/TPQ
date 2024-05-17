<?php

namespace App\Http\Controllers;

use App\Models\RecapPresensi;
use App\Http\Requests\StoreRecapPresensiRequest;
use App\Http\Requests\UpdateRecapPresensiRequest;
use App\Models\Presensi;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class RecapPresensiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $validatedData = $request->validate([
            'id_user' => 'required',
            'id_presensi' => 'required',
            'date' => 'required',
        ]);


        $recap = RecapPresensi::create($validatedData);

        return response()->json([
            'message' => 'Check-in successful',
            'data' => $recap,
        ]);
    }

    public function checkToday($id_user)
    {
        $today = Carbon::today();

        $existingRecaps = RecapPresensi::where('id_user', $id_user)
            ->whereDate('date', $today)
            ->get();

        $checkedInPresensi = $existingRecaps->pluck('id_presensi')->toArray();

        return response()->json($checkedInPresensi);
    }

    /**
     * Display the specified resource.
     */
    public function show(RecapPresensi $recapPresensi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RecapPresensi $recapPresensi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRecapPresensiRequest $request, RecapPresensi $recapPresensi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RecapPresensi $recapPresensi)
    {
        //
    }
}
