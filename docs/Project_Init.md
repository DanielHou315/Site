[Reference](https://zhuanlan.zhihu.com/p/470586190)

# 初始化package.json文件
npm init -y
​
# 安装tailwind
npm install -D tailwindcss
​
# 创建tailwind.config.js
npx tailwindcss init

# tailwind.config.js
module.exports = {
  // 定位index.html文件
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


# Compile TailwindCSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css
# Thiw output.css will be linked in index.html