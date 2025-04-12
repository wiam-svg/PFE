<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Signalement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::latest()->paginate(10);
        return Inertia::render('Categories/Index', [
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

        return redirect()->route('dashboard')->with('success', 'Catégorie créée avec succès.');
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
    public function edit(Categorie $categorie)
    {
        return Inertia::render('Categories/Edit', [
            'categorie' => $categorie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categorie $categorie)
    {
        $request->validate([
            'nom' => 'required|string|max:255|unique:categories,nom,' . $categorie->id,
            'description' => 'nullable|string',
        ]);

        $categorie->update($request->all());

        return redirect()->route('categories.index')->with('success', 'Catégorie mise à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
        return redirect()->route('categories.index')->with('success', 'Catégorie supprimée avec succès.');
    }
}
