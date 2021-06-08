<?php

    namespace Database\Seeders;

    use Illuminate\Database\Seeder;
    use App\Models\Livre;

    class LivreSeeder extends Seeder
    {
        public function run(){
            /* tvm */
            self::createLivre(1990, 451, 2162578, 1);
            self::createLivre(1991, 602, 2264982, 1);
            self::createLivre(1992, 533, 2143292, 1);
            self::createLivre(1993, 705, 2549107, 1);
            self::createLivre(1994, 769, 2946133, 1);
            self::createLivre(1995, 937, 3377361, 1);
            self::createLivre(1996, 949, 2944803, 1);
            self::createLivre(1997, 870, 2941330, 1);
            self::createLivre(1998, 953, 2955752, 1);
            self::createLivre(1999, 1041, 2945180, 1);
            self::createLivre(2000, 1141, 2949068, 1);
            self::createLivre(2001, 1211, 2943236, 1);
            self::createLivre(2002, 1052, 2945424, 1);
            self::createLivre(2003, 1221, 2954728, 1);
            self::createLivre(2004, 1254, 2950484, 1);
            self::createLivre(2005, 1189, 2949107, 1);
            self::createLivre(2006, 1440, 2937420, 1);
            self::createLivre(2007, 1390, 2945973, 1);
            self::createLivre(2008, 1419, 2948703, 1);
            self::createLivre(2009, 1333, 2944607, 1);
            self::createLivre(2010, 1366, 2959238, 1);
            self::createLivre(2011, 1574, 2946734, 1);
            self::createLivre(2012, 1741, 2953379, 1);
            self::createLivre(2013, 1674, 2964866, 1);
            self::createLivre(2014, 1875, 2956653, 1);
            self::createLivre(2015, 1731, 2949057, 1);
            self::createLivre(2016, 1486, 2960554, 1);
            self::createLivre(2017, 1603, 2961956, 1);
            self::createLivre(2018, 1760, 2923590, 1);
            self::createLivre(2019, 1818, 2919359, 1);
            /* acad */
            self::createLivre(1990, 0, 2994867, 2);
            self::createLivre(1991, 1, 3043900, 2);
            self::createLivre(1992, 0, 3027024, 2);
            self::createLivre(1993, 0, 3124076, 2);
            self::createLivre(1994, 1, 3046350, 2);
            self::createLivre(1995, 1, 3020408, 2);
            self::createLivre(1996, 0, 3103742, 2);
            self::createLivre(1997, 0, 3328617, 2);
            self::createLivre(1998, 4, 3094770, 2);
            self::createLivre(1999, 2, 3033896, 2);
            self::createLivre(2000, 1, 3085980, 2);
            self::createLivre(2001, 0, 2986544, 2);
            self::createLivre(2002, 1, 3067085, 2);
            self::createLivre(2003, 1, 3067767, 2);
            self::createLivre(2004, 0, 3041616, 2);
            self::createLivre(2005, 6, 2976006, 2);
            self::createLivre(2006, 3, 3054073, 2);
            self::createLivre(2007, 1, 3249638, 2);
            self::createLivre(2008, 3, 3016533, 2);
            self::createLivre(2009, 5, 2983726, 2);
            self::createLivre(2010, 2, 2877259, 2);
            self::createLivre(2011, 2, 3367013, 2);
            self::createLivre(2012, 0, 3304418, 2);
            self::createLivre(2013, 4, 2702711, 2);
            self::createLivre(2014, 4, 2630874, 2);
            self::createLivre(2015, 1, 2756971, 2);
            self::createLivre(2016, 1, 2954437, 2);
            self::createLivre(2017, 0, 3017392, 2);
            self::createLivre(2018, 2, 3124606, 2);
            self::createLivre(2019, 0, 3036621, 2);

            /* fic */
            self::createLivre(1990, 59, 2957426, 3);
            self::createLivre(1991, 46, 3057283, 3);
            self::createLivre(1992, 35, 2859684, 3);
            self::createLivre(1993, 44, 2854359, 3);
            self::createLivre(1994, 57, 2811440, 3);
            self::createLivre(1995, 44, 2800259, 3);
            self::createLivre(1996, 59, 2738049, 3);
            self::createLivre(1997, 54, 2628802, 3);
            self::createLivre(1998, 55, 2763463, 3);
            self::createLivre(1999, 91, 3017650, 3);
            self::createLivre(2000, 63, 2873130, 3);
            self::createLivre(2001, 99, 2834357, 3);
            self::createLivre(2002, 56, 2749464, 3);
            self::createLivre(2003, 70, 3022169, 3);
            self::createLivre(2004, 83, 3003076, 3);
            self::createLivre(2005, 49, 2956459, 3);
            self::createLivre(2006, 58, 3008520, 3);
            self::createLivre(2007, 75, 2965886, 3);
            self::createLivre(2008, 45, 3036889, 3);
            self::createLivre(2009, 45, 2964375, 3);
            self::createLivre(2010, 44, 2854585, 3);
            self::createLivre(2011, 62, 3052122, 3);
            self::createLivre(2012, 79, 2831520, 3);
            self::createLivre(2013, 50, 3117706, 3);
            self::createLivre(2014, 50, 3040882, 3);
            self::createLivre(2015, 37, 3055801, 3);
            self::createLivre(2016, 39, 2376350, 3);
            self::createLivre(2017, 56, 2893267, 3);
            self::createLivre(2018, 66, 2994652, 3);
            self::createLivre(2019, 37, 2992909, 3);

            /* Mag */
            self::createLivre(1990, 4, 3066874, 4);
            self::createLivre(1991, 4,3154789, 4);
            self::createLivre(1992, 8,3201613, 4);
            self::createLivre(1993, 9, 3170868, 4);
            self::createLivre(1994, 10, 3213625, 4);
            self::createLivre(1995, 7, 3208946, 4);
            self::createLivre(1996, 10, 3228176, 4);
            self::createLivre(1997, 22, 3250228, 4);
            self::createLivre(1998, 16, 3272469, 4);
            self::createLivre(1999, 10, 3270365, 4);
            self::createLivre(2000, 24, 3272184, 4);
            self::createLivre(2001, 30, 3204722, 4);
            self::createLivre(2002, 15, 3221093, 4);
            self::createLivre(2003, 15, 3231273, 4);
            self::createLivre(2004, 23, 3233392, 4);
            self::createLivre(2005, 24, 3248609, 4);
            self::createLivre(2006, 25, 3208301, 4);
            self::createLivre(2007, 31, 3148671, 4);
            self::createLivre(2008, 24, 3185191, 4);
            self::createLivre(2009, 22, 2930685, 4);
            self::createLivre(2010, 30, 2828679, 4);
            self::createLivre(2011, 25, 3121137, 4);
            self::createLivre(2012, 33, 3214271, 4);
            self::createLivre(2013, 30, 3125999, 4);
            self::createLivre(2014, 25, 3177800, 4);
            self::createLivre(2015, 28, 3135059, 4);
            self::createLivre(2016, 19, 3026951, 4);
            self::createLivre(2017, 32, 3149398, 4);
            self::createLivre(2018, 29, 3104141, 4);
            self::createLivre(2019, 33, 3107638, 4);

            /* News */
            self::createLivre(1990, 7, 3025469, 5);
            self::createLivre(1991, 9, 3049204, 5);
            self::createLivre(1992, 6, 3027128, 5);
            self::createLivre(1993, 9, 3075512, 5);
            self::createLivre(1994, 5, 3068590, 5);
            self::createLivre(1995, 10, 3053070, 5);
            self::createLivre(1996, 10, 3034666, 5);
            self::createLivre(1997, 12, 3080535, 5);
            self::createLivre(1998, 15, 3059404, 5);
            self::createLivre(1999, 19, 3045376, 5);
            self::createLivre(2000, 20, 2991475, 5);
            self::createLivre(2001, 11, 3021111, 5);
            self::createLivre(2002, 24, 3052681, 5);
            self::createLivre(2003, 18, 3005438, 5);
            self::createLivre(2004, 24, 3049540, 5);
            self::createLivre(2005, 17, 3053104, 5);
            self::createLivre(2006, 18, 3055096, 5);
            self::createLivre(2007, 14, 2965401, 5);
            self::createLivre(2008, 22, 2980513, 5);
            self::createLivre(2009, 23, 2919690, 5);
            self::createLivre(2010, 14, 2637248, 5);
            self::createLivre(2011, 14, 2922935, 5);
            self::createLivre(2012, 14, 3076752, 5);
            self::createLivre(2013, 16, 3060563, 5);
            self::createLivre(2014, 19, 3089316, 5);
            self::createLivre(2015, 21, 3062340, 5);
            self::createLivre(2016, 18, 3048713, 5);
            self::createLivre(2017, 21, 3120232, 5);
            self::createLivre(2018, 21, 3115299, 5);
            self::createLivre(2019, 21, 3090623, 5);

            /* Spok */
            self::createLivre(1990, 25, 3142050, 6);
            self::createLivre(1991, 20, 3104134, 6);
            self::createLivre(1992, 60, 3231859, 6);
            self::createLivre(1993, 63, 3220522, 6);
            self::createLivre(1994, 72, 3217948, 6);
            self::createLivre(1995, 64, 3263085, 6);
            self::createLivre(1996, 125, 2957755, 6);
            self::createLivre(1997, 96, 2845896, 6);
            self::createLivre(1998, 103, 3234105, 6);
            self::createLivre(1999, 96, 3239311, 6);
            self::createLivre(2000, 56, 3275100, 6);
            self::createLivre(2001, 80, 2968883, 6);
            self::createLivre(2002, 102, 3218580, 6);
            self::createLivre(2003, 158, 3275778, 6);
            self::createLivre(2004, 107, 3213870, 6);
            self::createLivre(2005, 121, 3276966, 6);
            self::createLivre(2006, 112, 3224865, 6);
            self::createLivre(2007, 119, 2929376, 6);
            self::createLivre(2008, 150, 2576889, 6);
            self::createLivre(2009, 146, 2948466, 6);
            self::createLivre(2010, 208, 3062820, 6);
            self::createLivre(2011, 250, 3495933, 6);
            self::createLivre(2012, 226, 3258325, 6);
            self::createLivre(2013, 237, 2952439, 6);
            self::createLivre(2014, 278, 2845592, 6);
            self::createLivre(2015, 290, 2924165, 6);
            self::createLivre(2016, 247, 3032554, 6);
            self::createLivre(2017, 266, 3090583, 6);
            self::createLivre(2018, 268,3211206, 6);
            self::createLivre(2019, 242, 3195461, 6);

        }

        private static function createLivre($annee, $omg_count, $omg_total, $id_source){
            $Livre = new Livre();
            $Livre->annee = $annee;
            $Livre->omg_count = $omg_count;
            $Livre->omg_total = $omg_total;
            $Livre->id_source = $id_source;

            assert($Livre->save(),"Echec de l'insertion");

        }
    }
