// vite.config.js
import { ViteImageOptimizer } from "file:///D:/Projects/Acceleration/1-fitness/accelerator-first-project/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import VitePluginSvgSpritemap from "file:///D:/Projects/Acceleration/1-fitness/accelerator-first-project/node_modules/@spiriit/vite-plugin-svg-spritemap/dist/index.js";
var vite_config_default = {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false
                },
                removeViewBox: false,
                // https://github.com/svg/svgo/issues/1128
                cleanupIds: false
              }
            }
          },
          "removeDimensions"
        ]
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache"
    })
  ],
  css: {
    devSourcemap: true
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist"
  },
  base: "./",
  server: {
    port: 3e3
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxBY2NlbGVyYXRpb25cXFxcMS1maXRuZXNzXFxcXGFjY2VsZXJhdG9yLWZpcnN0LXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2plY3RzXFxcXEFjY2VsZXJhdGlvblxcXFwxLWZpdG5lc3NcXFxcYWNjZWxlcmF0b3ItZmlyc3QtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvamVjdHMvQWNjZWxlcmF0aW9uLzEtZml0bmVzcy9hY2NlbGVyYXRvci1maXJzdC1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcbmltcG9ydCBWaXRlUGx1Z2luU3ZnU3ByaXRlbWFwIGZyb20gJ0BzcGlyaWl0L3ZpdGUtcGx1Z2luLXN2Zy1zcHJpdGVtYXAnO1xuLy8gaW1wb3J0IHsgVml0ZU1pbmlmeVBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1pbmlmeSc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd2aXRlJykuVXNlckNvbmZpZ30gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGx1Z2luczogW1xuICAgIFZpdGVQbHVnaW5TdmdTcHJpdGVtYXAoJ3NvdXJjZS9pbWcvc3ByaXRlLyouc3ZnJywge1xuICAgICAgc3R5bGVzOiBmYWxzZSxcbiAgICAgIGluamVjdFNWR09uRGV2OiB0cnVlLFxuICAgIH0pLFxuICAgIC8vIGlucHV0IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2h0bWwtbWluaWZpZXItdGVyc2VyIG9wdGlvbnNcbiAgICAvLyBWaXRlTWluaWZ5UGx1Z2luKHt9KSxcbiAgICBWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xuICAgICAgdGVzdDogL1xcLihqcGU/Z3xwbmd8c3ZnKSQvaSxcbiAgICAgIGluY2x1ZGVQdWJsaWM6IGZhbHNlLFxuICAgICAgbG9nU3RhdHM6IHRydWUsXG4gICAgICBhbnNpQ29sb3JzOiB0cnVlLFxuICAgICAgc3ZnOiB7XG4gICAgICAgIG11bHRpcGFzczogdHJ1ZSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwcmVzZXQtZGVmYXVsdCcsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgY2xlYW51cE51bWVyaWNWYWx1ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbnZlcnRQYXRoRGF0YToge1xuICAgICAgICAgICAgICAgICAgZmxvYXRQcmVjaXNpb246IDIsXG4gICAgICAgICAgICAgICAgICBmb3JjZUFic29sdXRlUGF0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB1dGlsaXplQWJzb2x1dGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVmlld0JveDogZmFsc2UsIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdmcvc3Znby9pc3N1ZXMvMTEyOFxuICAgICAgICAgICAgICAgIGNsZWFudXBJZHM6IGZhbHNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgICdyZW1vdmVEaW1lbnNpb25zJyxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBwbmc6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I3BuZ1xuICAgICAgICBxdWFsaXR5OiA4MCxcbiAgICAgICAgcGFsZXR0ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGpwZWc6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zaGFycC5waXhlbHBsdW1iaW5nLmNvbS9hcGktb3V0cHV0I2pwZWdcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICAgIHByb2dyZXNzaXZlOiB0cnVlXG4gICAgICB9LFxuICAgICAganBnOiB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hhcnAucGl4ZWxwbHVtYmluZy5jb20vYXBpLW91dHB1dCNqcGVnXG4gICAgICAgIHF1YWxpdHk6IDgwLFxuICAgICAgICBwcm9ncmVzc2l2ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIENhY2hlIGFzc2V0cyBpbiBjYWNoZUxvY2F0aW9uLiBXaGVuIGVuYWJsZWQsIHJlYWRzIGFuZCB3cml0ZXMgYXNzZXQgZmlsZXMgd2l0aCB0aGVpciBoYXNoIHN1ZmZpeCBmcm9tIHRoZSBzcGVjaWZpZWQgcGF0aC5cbiAgICAgIGNhY2hlOiB0cnVlLFxuICAgICAgY2FjaGVMb2NhdGlvbjogJy4vLmNhY2hlJyxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgZGV2U291cmNlbWFwOiB0cnVlXG4gIH0sXG4gIHB1YmxpY0RpcjogJ3B1YmxpYycsXG4gIHJvb3Q6ICcuL3NvdXJjZScsXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vZGlzdCcsXG4gIH0sXG4gIGJhc2U6ICcuLycsXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gIH1cbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdYLFNBQVMsMEJBQTBCO0FBQ25aLE9BQU8sNEJBQTRCO0FBSW5DLElBQU8sc0JBQVE7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLHVCQUF1QiwyQkFBMkI7QUFBQSxNQUNoRCxRQUFRO0FBQUEsTUFDUixnQkFBZ0I7QUFBQSxJQUNsQixDQUFDO0FBQUE7QUFBQTtBQUFBLElBR0QsbUJBQW1CO0FBQUEsTUFDakIsTUFBTTtBQUFBLE1BQ04sZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLFFBQ0gsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxjQUNOLFdBQVc7QUFBQSxnQkFDVCxzQkFBc0I7QUFBQSxnQkFDdEIsaUJBQWlCO0FBQUEsa0JBQ2YsZ0JBQWdCO0FBQUEsa0JBQ2hCLG1CQUFtQjtBQUFBLGtCQUNuQixpQkFBaUI7QUFBQSxnQkFDbkI7QUFBQSxnQkFDQSxlQUFlO0FBQUE7QUFBQSxnQkFDZixZQUFZO0FBQUEsY0FDZDtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUE7QUFBQSxRQUVKLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxLQUFLO0FBQUE7QUFBQSxRQUVILFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUE7QUFBQSxNQUVBLE9BQU87QUFBQSxNQUNQLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxXQUFXO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
