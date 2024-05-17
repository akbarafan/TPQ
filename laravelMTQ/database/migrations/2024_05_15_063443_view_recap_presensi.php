<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::statement("
            CREATE VIEW view_recap AS
            SELECT 
                rp.id_user,
                us.name AS user,
                rp.id_presensi,
                ps.id_teacher,
                us2.name AS teacher,
                ps.id_categori,
                ct.name AS cateori,
                ct.fromHour,
                ct.untilHour,
                ps.date AS date_presensi,
                ps.status,
                rp.date AS date_recap
            FROM 
                recap_presensis rp
            INNER JOIN 
                users us ON rp.id_user = us.id
            INNER JOIN 
                presensis ps ON rp.id_presensi = ps.id
            INNER JOIN 
                users us2 ON ps.id_teacher = us2.id
            INNER JOIN 
                categories ct ON ps.id_categori = ct.id
        ");
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
