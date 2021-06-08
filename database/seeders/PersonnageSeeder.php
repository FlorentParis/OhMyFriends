<?php

    namespace Database\Seeders;

    use Illuminate\Database\Seeder;
    use App\Models\Personnage;

    class PersonnageSeeder extends Seeder
    {
        public function run(){
            self::createPersonnage('Rachel');
            self::createPersonnage('Monica');
            self::createPersonnage('Phoebe');
            self::createPersonnage('Ross');
            self::createPersonnage('Chandler');
            self::createPersonnage('Joey');
        }

        private static function createPersonnage(string $nom){
            $Personnage = new Personnage();
            $Personnage->id;
            $Personnage->nom = $nom;

            assert($Personnage->save(),"Echec de l'insertion");

        }
    }
