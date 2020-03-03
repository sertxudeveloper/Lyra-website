<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Process\Process;

class ResetAll extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'demo:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset the database and the local storage of the demo website';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $process = new Process(['/opt/plesk/php/7.3/bin/php artisan migrate:fresh']);
        $process->run();

        $process = new Process(['/opt/plesk/php/7.3/bin/php artisan db:seed']);
        $process->run();

        $process = new Process(['rm -rf storage/app && cp -r storage/empty storage/app']);
        $process->run();
        return true;
    }
}
