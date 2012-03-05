BASENAME = File.basename(Dir.getwd)

USER = "lenni"
HOST = "lenni.info"
PATH = "www/#{BASENAME}"

task :default => ["deploy"]

task :deploy do
    puts "*** Deploying the site ***"
    sh "rsync -r --exclude=.git . #{USER}@#{HOST}:#{PATH}"
end
