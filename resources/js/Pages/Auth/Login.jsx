// import Checkbox from '@/Components/Checkbox';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
// import TextInput from '@/Components/TextInput';
// import GuestLayout from '@/Layouts/GuestLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Login({ status, canResetPassword }) {
//     const { data, setData, post, processing, errors, reset } = useForm({
//         email: '',
//         password: '',
//         remember: false,
//     });

//     const submit = (e) => {
//         e.preventDefault();

//         post(route('login'), {
//             onFinish: () => reset('password'),
//         });
//     };

//     return (
//         <GuestLayout>
//             <Head title="Log in" />

//             {status && (
//                 <div className="mb-4 text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}

//             <form onSubmit={submit}>
//                 <div>
//                     <InputLabel htmlFor="email" value="Email" />

//                     <TextInput
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={data.email}
//                         className="mt-1 block w-full"
//                         autoComplete="username"
//                         isFocused={true}
//                         onChange={(e) => setData('email', e.target.value)}
//                     />

//                     <InputError message={errors.email} className="mt-2" />
//                 </div>

//                 <div className="mt-4">
//                     <InputLabel htmlFor="password" value="Password" />

//                     <TextInput
//                         id="password"
//                         type="password"
//                         name="password"
//                         value={data.password}
//                         className="mt-1 block w-full"
//                         autoComplete="current-password"
//                         onChange={(e) => setData('password', e.target.value)}
//                     />

//                     <InputError message={errors.password} className="mt-2" />
//                 </div>

//                 <div className="mt-4 block">
//                     <label className="flex items-center">
//                         <Checkbox
//                             name="remember"
//                             checked={data.remember}
//                             onChange={(e) =>
//                                 setData('remember', e.target.checked)
//                             }
//                         />
//                         <span className="ms-2 text-sm text-gray-600">
//                             Remember me
//                         </span>
//                     </label>
//                 </div>

//                 <div className="mt-4 flex items-center justify-end">
//                     {canResetPassword && (
//                         <Link
//                             href={route('password.request')}
//                             className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             Forgot your password?
//                         </Link>
//                     )}

//                     <PrimaryButton className="ms-4" disabled={processing}>
//                         Log in
//                     </PrimaryButton>
//                 </div>
//             </form>
//         </GuestLayout>
//     );
// }


// import { useState } from 'react';
// import { useForm } from '@inertiajs/react';

// const Login = () => {
//     const { data, setData, post, processing, errors } = useForm({
//         email: '',
//         password: ''
//     });

//     const [showPassword, setShowPassword] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         post('/login');
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold text-center text-gray-800">Se connecter</h2>
//                 <form onSubmit={handleSubmit} className="mt-6">
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email *</label>
//                         <input 
//                             type="email"
//                             name="email"
//                             value={data.email}
//                             onChange={(e) => setData('email', e.target.value)}
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//                             required
//                         />
//                         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                     </div>

//                     <div className="mb-4 relative">
//                         <label className="block text-gray-700">Mot de passe *</label>
//                         <input 
//                             type={showPassword ? 'text' : 'password'}
//                             name="password"
//                             value={data.password}
//                             onChange={(e) => setData('password', e.target.value)}
//                             className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
//                             required
//                         />
//                         <button 
//                             type="button" 
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute top-10 right-3 text-gray-500"
//                             aria-label="Afficher/Masquer le mot de passe"
//                         >
//                             {showPassword ? '👁️' : '🙈'}
//                         </button>
//                         {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//                     </div>

//                     <button 
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                         disabled={processing}
//                     >
//                         {processing ? 'Connexion...' : 'Se connecter'}
//                     </button>
//                 </form>

//                 <p className="text-center text-gray-600 mt-4">
//                     Pas encore de compte ? <a href="/register" className="text-blue-600 hover:underline">Inscrivez-vous</a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;


import { useState } from 'react';
import { useForm } from '@inertiajs/react';

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-800">Se connecter</h2>
                    <p className="text-gray-600 mt-2">Entrez vos identifiants pour accéder à votre compte</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input 
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 transition-colors"
                                placeholder="votre@email.com"
                                required
                            />
                        </div>
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block text-gray-700 font-medium">Mot de passe</label>
                            <a href="/forgot-password" className="text-sm text-red-600 hover:text-red-800">
                                Mot de passe oublié?
                            </a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                                aria-label="Afficher/Masquer le mot de passe"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Se souvenir de moi
                        </label>
                    </div>

                    <button 
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                        disabled={processing}
                    >
                        {processing ? (
                            <div className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Connexion...
                            </div>
                        ) : (
                            'Se connecter'
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Pas encore de compte? {' '}
                        <a href="/register" className="font-medium text-red-600 hover:text-red-500 hover:underline transition-colors">
                            Inscrivez-vous
                        </a>
                    </p>
                </div>
                
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                            </svg>
                            <span className="sr-only">Continuer avec Google</span>
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                            <span className="sr-only">Continuer avec Twitter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;