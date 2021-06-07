<?php

namespace Database\Seeders;

use App\Models\SourceModel;
use Illuminate\Database\Seeder;
use phpDocumentor\Reflection\DocBlock\Tags\Source;

class SourceSeeder extends Seeder
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
        //
    }
}
