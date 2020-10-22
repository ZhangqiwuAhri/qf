const autoprefixer = require("autoprefixer");
const postcss_import = require("postcss-import");
const postcss_anno = require("cssnano");
const postcss_cssnext = require("postcss-cssnext");
const stylelint = require("stylelint");
const postcss_sprites = require("postcss-sprites");

module.exports = {
    plugins:[
        ,postcss_cssnext
        // ,stylelint
        // ,autoprefixer({
        //     overrideBrowserslist:['>0%']
        //}),
        ,postcss_import
       
        ,postcss_anno
        ,postcss_sprites({
            spritePath:'css/dist'
        })
        
     
    ]
      
 
}