BASENAME = File.basename(Dir.getwd)

USER = "lenni"
HOST = "lenni.info"
PATH = "#{BASENAME}"

desc "Clears the styles, generates new ones and then deploys the theme"
task :deploy do
    puts "*** Deploying the site ***"
    sh "rsync -r --exclude=.git . #{USER}@#{HOST}:#{PATH}"
end
