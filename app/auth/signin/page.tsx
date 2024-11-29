'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiArrowLeft } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: true,
        callbackUrl: '/dashboard'
      });

      if (result?.error) {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('An error occurred during sign in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = (provider: string) => {
    setIsLoading(true);
    signIn(provider, { callbackUrl: '/dashboard' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <Link 
            href="/"
            className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8"
          >
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 relative"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-lg transform rotate-45"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [45, 45, 45],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-accent rounded-lg transform -rotate-45"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [-45, -45, -45],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
          <h2 className="text-center text-3xl font-bold text-primary">
            Welcome to PathForge
          </h2>
          <p className="mt-2 text-center text-accent">
            Continue your learning journey
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 text-red-500 p-3 rounded-lg text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-4">
            {/* OAuth Providers */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => handleOAuthSignIn('github')}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-medium rounded-lg shadow-sm text-sm font-medium text-primary bg-secondary hover:bg-gray-light transition-colors disabled:opacity-50"
            >
              <FiGithub className="h-5 w-5 mr-2" />
              Continue with GitHub
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => handleOAuthSignIn('google')}
              disabled={isLoading}
              className="w-full flex items-center justify-center px-4 py-2.5 border border-gray-medium rounded-lg shadow-sm text-sm font-medium text-primary bg-secondary hover:bg-gray-light transition-colors disabled:opacity-50"
            >
              <FcGoogle className="h-5 w-5 mr-2" />
              Continue with Google
            </motion.button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-medium" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-secondary text-accent">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="block w-full px-3 py-2 border border-gray-medium rounded-lg bg-secondary placeholder-accent text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="block w-full px-3 py-2 border border-gray-medium rounded-lg bg-secondary placeholder-accent text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                  placeholder="Password"
                />
              </div>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg text-sm font-medium text-secondary bg-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 transition-colors"
              >
                <FiMail className="h-5 w-5 mr-2" />
                Sign in with Email
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
