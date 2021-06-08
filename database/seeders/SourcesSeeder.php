<?php

namespace Database\Seeders;

use App\Models\Source;
use Illuminate\Database\Seeder;

class SourcesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private static function createSource(string $nom){
        $source = new Source();
        $source->id;
        $source->libelle = $nom;

        assert($source->save(),"Echec de l'insertion de : '$nom'");
    }

    public function run()
    {
        self::createSource('tvm');
        self::createSource('acad');
        self::createSource('fic');
        self::createSource('mag');
        self::createSource('news');
        self::createSource('spok');
    }
}
