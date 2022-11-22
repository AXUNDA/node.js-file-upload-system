const multer = require('multer');
module.exports = multer({
      storage:multer.diskStorage({}),
      fileFilter :(req, file, cb)=> {

            // The function should call `cb` with a boolean
            // to indicate if the file should be accepted\
            if(!file.mimetype.match(/png||jpeg||jpg||gif$i/)){
            cb(new Error('File type is not supported').false)
            return;


            }
          
            // To reject this file pass `false`, like so:
          
            // To accept the file pass `true`, like so:
            cb(null, true)
          
            // You can always pass an error if something goes wrong:
          
          }
})