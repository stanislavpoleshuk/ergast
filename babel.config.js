module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          application: './src/application',
          models: './src/models',
          infrastructure: './src/infrastructure',
          components: './src/presentation/components',
          resources: './src/presentation/resources',
          screens: './src/presentation/screens',
          core: './src/presentation/core',
        },
      },
    ],
  ],
};
