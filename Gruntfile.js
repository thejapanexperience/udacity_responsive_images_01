grunt.initConfig({
  image_resize: {
    resize: {
      options: {
        width: 100
      },
      files: {
        'tmp/wikipedia.png': 'images/fixtures/wikipedia.png'
      }
    }
  }
})
