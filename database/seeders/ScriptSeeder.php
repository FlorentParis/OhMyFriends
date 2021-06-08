<?php

namespace Database\Seeders;

use App\Models\Script;
use Illuminate\Database\Seeder;

class ScriptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private static function createScript(int $nbOmg, int $idPerso, int $idSaison){
        $script = new Script();
        $script -> id_saison = $idSaison;
        $script -> id_personnage = $idPerso;
        $script -> nb_omg = $nbOmg;
        assert($script->save(),"Echec de l'insertion");
    }

    public function run()
    {
        //Rachel's Script
        self::createScript(18, 1, 1);
        self::createScript(27,1,2);
        self::createScript(23, 1, 3);
        self::createScript(25,1,4);
        self::createScript(31,1,5);
        self::createScript(37,1,6);
        self::createScript(35,1,7);
        self::createScript(26,1,8);
        self::createScript(17,1,9);
        self::createScript(25,1,10);

        self::createScript(14, 2, 1);
        self::createScript(27,2,2);
        self::createScript(23, 2, 3);
        self::createScript(31,2,4);
        self::createScript(16,2,5);
        self::createScript(25,2,6);
        self::createScript(19,2,7);
        self::createScript(20,2,8);
        self::createScript(28,2,9);
        self::createScript(36,2,10);

    }
}
