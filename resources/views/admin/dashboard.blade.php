@extends('admin.admin')


@section('title')
    Dashboard
@endsection

@section('body')
    <div class="stack-large">
        <!--{% include 'admin/home/_jobs.html.twig' %}-->

        <div class="grid2" style="--gap: 4">
            <!-- Commentaires -->
            <!--{% include 'admin/home/_comments.html.twig' %}-->
            <div class="stack-large">
                <!-- Actions -->
                <section class="stack" style="--gap: 1">
                    <div class="flex">
                        <h1 class="dashboard-title">{!! icon('start') !!} Actions</h1>
                    </div>
                    <div class="dashboard-card">
                        <div class="flex">
                            <form action="#" method="post">
                                <button class="btn danger">{!! icon('trash') !!} Vider le cache</button>
                            </form>
                            <form action="#" method="post">
                                <button class="btn secondary">{!! icon('comment') !!} Détecter le spam</button>
                            </form>
                        </div>
                    </div>
                </section>
                <section class="stack" style="--gap: 1">
                    <div class="flex">
                        <h1 class="dashboard-title">{!! icon('edit') !!} <a href="https://www.mail-tester.com/" rel="noreferrer">Tester les emails</a></h1>
                    </div>
                    <div class="dashboard-card">
                        <form action="#" method="post" class="flex stretch">
                            <div class="form-group" style="width: 88%">
                                <input class="form-control" placeholder="Email" name="email">
                            </div>
                            <button class="btn primary-outlined">Envoyer</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    </div>
@endsection
