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

        //Monica
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

        //Phoebe
        self::createScript(8, 3, 1);
        self::createScript(18,3,2);
        self::createScript(24, 3, 3);
        self::createScript(13,3,4);
        self::createScript(15,3,5);
        self::createScript(15,3,6);
        self::createScript(25,3,7);
        self::createScript(19,3,8);
        self::createScript(28,3,9);
        self::createScript(9,3, 10);

        //Ross
        self::createScript(6, 4, 1);
        self::createScript(9,4,2);
        self::createScript(6, 4, 3);
        self::createScript(8,4,4);
        self::createScript(9,4,5);
        self::createScript(12,4,6);
        self::createScript(12,4,7);
        self::createScript(9,4,8);
        self::createScript(25,4,9);
        self::createScript(21,4, 10);

        //Chandler
        self::createScript(9, 5, 1);
        self::createScript(3,5,2);
        self::createScript(7, 5, 3);
        self::createScript(7,5,4);
        self::createScript(11,5,5);
        self::createScript(18,5,6);
        self::createScript(8,5,7);
        self::createScript(7,5,8);
        self::createScript(4,5,9);
        self::createScript(5,5, 10);

        //Joey
        self::createScript(3, 6, 1);
        self::createScript(6,6,2);
        self::createScript(4, 6, 3);
        self::createScript(4,6,4);
        self::createScript(5,6,5);
        self::createScript(9,6,6);
        self::createScript(4,6,7);
        self::createScript(13,6,8);
        self::createScript(9,6,9);
        self::createScript(7,6, 10);

    }
}
