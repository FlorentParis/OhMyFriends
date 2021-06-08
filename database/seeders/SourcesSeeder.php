<?php

namespace Database\Seeders;

use App\Models\SourceModel;
use Illuminate\Database\Seeder;
use phpDocumentor\Reflection\DocBlock\Tags\Source;

class SourcesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private static function createSource(string $nom){
        $source = new SourceModel();
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
