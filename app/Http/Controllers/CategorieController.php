<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Signalement;
use Illuminate\Validation\Rule;

use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Inertia\Inertia;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::latest()->paginate(10);
        return Inertia::render('Categories/ListCategories', [
            'categories' => $categories,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {  
        
        $request->validate([
            'nom' =>'required|string|max:255|unique:categories',
            'description' => 'nullable|string',
        ]);
        $categorie=new Categorie();
        $categorie->nom=$request->nom;
        $categorie->description=$request->description;
        $categorie->save();

        // Categorie::create([
        //     'nom'=>$request->nom,
        // 'description'=>$request->description,
        // ]);

        return redirect()->route('listcategories')->with('success', 'Catégorie créée avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Categorie $categorie)
    {
        return Inertia::render('Categories/Show', [
            'categorie' => $categorie,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $categorie= Categorie::findOrFail($id);
        return Inertia::render('Categories/EditCategorie', [
            'categorie' => $categorie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $categorie = Categorie::findOrFail($id);
        
        $validated = $request->validate([
            'nom' => 'required',  // Ignore la validation pour la catégorie courante
            'description' => 'nullable|string',
        ]);
    
         if ($categorie) {
        // Mise à jour de la catégorie
        $categorie->update([
            'nom' => $validated['nom'],
            'description' => $validated['description'],
        ]);
        return redirect()->back();
    }}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categorie = Categorie::findOrFail($id);
        $categorie->delete();
        return redirect()->back();
    }
}
