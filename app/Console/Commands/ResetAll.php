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
        $this->call('db:wipe', ['--force' => true]);

        $this->call('migrate', ['--force' => true]);
        $this->call('migrate', ['--force' => true, '--path' => 'database/migrations/lyra']);

        $this->call('db:seed', ['--force' => true]);

        $process = new Process(['rm', '-rf', 'storage/app']);
        $process->run();
        echo $process->getOutput();

        $process = new Process(['cp', '-r', 'storage/empty', 'storage/app']);
        $process->run();
        echo $process->getOutput();
        return 0;
    }
}
