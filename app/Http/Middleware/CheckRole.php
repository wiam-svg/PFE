<?php

namespace App\Http\Middleware;

use App\Models\Signalement;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    public function handle(Request $request, Closure $next, string $role): Response
    {
        if (!$request->user() || $request->user()->role !== $role) {
            return redirect()->route('signalements.index');
        }

        return $next($request);
    }
}