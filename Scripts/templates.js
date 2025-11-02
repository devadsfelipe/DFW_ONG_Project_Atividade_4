const Templates = {

    inicio: `
        <main>
        <section id="objetivo" class="container-grid">

            <div class="col-12 col-desktop-7">
                <h2>Nosso objetivo</h2>
                <p>Promover o desenvolvimento sustentável e o bem-estar social na cidade de Xique-Xique através do
                    engajamento cívico, da revitalização da infraestrutura urbana e do fortalecimento dos laços
                    comunitários, impulsionados pela força e dedicação do voluntariado local.</p>

                <article>
                    <h3>Impacto que Geramos</h3>
                    <p>Nossos programas já beneficiaram mais de 1.000 pessoas diretamente, oferecendo cursos
                        profissionalizantes e com nossa rede de apoio. Acreditamos que a mudança começa na base.</p>

                    <p>Foco: <span class="badge badge-educacao">Educação</span> <span
                            class="badge badge-voluntariado">Voluntariado</span></p>
                </article>
            </div>

            <div class="col-12 col-desktop-5">
                <img src="./Assets/Images/Membros.jpg" alt="Foto da equipe de voluntários em ação" width="600"
                    height="500">
            </div>

        </section>

        <section id="chamada-cadastro">
            <h2>Faça Parte da Mudança</h2>
            <p>Seja um voluntário ou um doador! </p>

            <a href="#cadastro" data-route="cadastro" class="btn btn-primary">Clique aqui e junte-se a nós</a>        </section>
    </main>
    `,

    projetos: `
        <main>
        <section id="voluntariado" class="container-grid">
            <div class="col-12">
                <h1>Nossos Projetos</h1>
                <h2>Oportunidades de Voluntariado</h2>
                <p>O voluntariado é o coração da nossa organização. Temos diversas frentes de trabalho para você aplicar
                    seu talento e fazer a diferença.</p>
                <div class="alert alert-warning">
                    Atenção: Novas vagas para voluntários abrem no início de cada mês.
                </div>
            </div>

            <div class="col-12 card-grid" style="margin-top:0 !important">

                <article id="mentoria" class="card">
                    <img src="./Assets/Images/Projeto_Mentoria.png" alt="Jovens estudando com um mentor"
                        class="card-img-top">
                    <div class="card-content">
                        <h3>Programa de Mentoria Educacional</h3>
                        <p>
                            <span class="badge badge-educacao">Educação</span>
                            <span class="badge badge-voluntariado">Voluntariado</span>
                        </p>
                        <p>Ajude jovens em idade escolar com reforço em português e matemática. Dedique apenas 2 horas
                            semanais.</p>
                        <aside>
                            <p class="text-small">Requisitos: Experiência prévia em ensino ou formação em áreas
                                correlatas é um diferencial.</p>
                        </aside>
                        <a href="#cadastro" data-route="cadastro" class="btn btn-primary">Quero ser Mentor</a>
                    </div>
                </article>

                <article id="cozinha" class="card">
                    <img src="./Assets/Images/Projeto_Cozinha_Solidaria.png" alt="Voluntários cozinhando em equipe"
                        class="card-img-top">
                    <div class="card-content">
                        <h3>Cozinha Solidária</h3>
                        <p>
                            <span class="badge badge-social">Ação Social</span>
                            <span class="badge badge-voluntariado">Voluntariado</span>
                        </p>
                        <p>Auxilie na preparação e distribuição de refeições para famílias em situação de
                            vulnerabilidade.</p>
                        <a href="#cadastro" data-route="cadastro" class="btn btn-primary">Ajudar na Cozinha</a>
                    </div>
                </article>

                <article class="card">
                    <img src="./Assets/Images/Projeto_Voluntariado.png" alt="Pessoas plantando árvores"
                        class="card-img-top">
                    <div class="card-content">
                        <h3>Revitalização de Praças</h3>
                        <p>
                            <span class="badge badge-ambiente">Sustentabilidade</span>
                        </p>
                        <p>Apoie a recuperação de áreas verdes e espaços de convivência na cidade de Xique-Xique.</p>
                        <button class="btn btn-primary" disabled>Vagas Esgotadas</button>
                    </div>
                </article>

            </div>

        </section>

        <section id="doacao" class="container-grid" style="margin-top: 5em;">
            <div class="col-12">
                <h2>Como Doar e Contribuir</h2>
                <p>Sua contribuição financeira ou material garante a continuidade dos nossos projetos. Veja como é fácil
                    doar:</p>

                <ol style="margin: 2rem;">
                    <li>Escolha o valor ou tipo de doação (dinheiro, alimentos, roupas).</li>
                    <li>Preencha o formulário de doação online.</li>
                    <li>Receba um comprovante e o nosso muito obrigado!</li>
                </ol>

                <a href="#cadastro" data-route="cadastro" class="btn btn-secondary">Quero Fazer uma Doação</a>
            </div>
        </section>
    </main>
    `,

    cadastro: `
         <main>
        <section class="container-grid">
            <div class="col-12">
                <h1>Faça parte e nos ajude a ajudar Xique-Xique</h1>

                <div class="alert alert-error">
                    Atenção: Todos os campos com (*) são obrigatórios e exigem formato correto (ex: 000.000.000-00
                    para CPF).
                </div>

                <h2>Preencha seus Dados</h2>

                <form action="/processar-cadastro" method="POST">

                    <fieldset>
                        <legend>Dados Pessoais</legend>

                        <div class="form-group">
                            <label for="nome">Nome Completo (*)</label>
                            <input type="text" id="nome" name="nome" required placeholder="Ex: Maria da Silva">
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail (*)</label>
                            <input type="email" id="email" name="email" required placeholder="exemplo@dominio.com">
                        </div>

                        <div class="form-group">
                            <label for="cpf">CPF (*)</label>
                            <input type="text" id="cpf" name="cpf" required pattern="^\d{3}\.\d{3}\.\d{3}-\d{2}$"
                                title="Formato: 999.999.999-99" placeholder="000.000.000-00">
                        </div>

                        <div class="form-group">
                            <label for="telefone">Telefone (*)</label>
                            <input type="tel" id="telefone" name="telefone" required
                                pattern="^\(\d{2}\)\s\d{4,5}-\d{4}$" title="Formato: (99) 99999-9999"
                                placeholder="(00) 00000-0000">
                        </div>

                        <div class="form-group">
                            <label for="dataNasc">Data de Nascimento (*)</label>
                            <input type="date" id="dataNasc" name="dataNasc" required>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <div class="form-group">
                            <label for="cep">CEP (*)</label>
                            <input type="text" id="cep" name="cep" required pattern="^\d{5}-\d{3}$"
                                title="Formato: 00000-000" placeholder="00000-000">
                        </div>

                        <div class="form-group">
                            <label for="endereco">Endereço (*)</label>
                            <input type="text" id="endereco" name="endereco" required
                                placeholder="Rua, Avenida, Número">
                        </div>

                        <div class="form-group">
                            <label for="cidade">Cidade (*)</label>
                            <input type="text" id="cidade" name="cidade" required>
                        </div>

                        <div class="form-group">
                            <label for="estado">Estado (*)</label>
                            <select id="estado" name="estado" required>
                                <option value="" disabled selected>Selecione seu Estado</option>
                                <option value="SP">São Paulo</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="BA">Bahia</option>
                            </select>
                        </div>
                    </fieldset>

                    <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                </form>
            </div>
        </section>
    </main>
    `,
    contato: `
         <main>
            <section id="contato" class="container-grid">
                <div class="col-12">
                    <h2>Informações de Contato</h2>
                    <ul>
                        <li>Email: <a href="mailto:contato@guardioesxiquexique.org">contato@guardioesxiquexique.org</a></li>
                        <li>Telefone: <a href="tel:+557498888-1111">(74) 98888-1111</a></li>
                        <li>Endereço: Rua Tititi, 99 - Centro, Xique-Xique - Bahia</li>
                    </ul>
                    <p>&copy; 2025 Guardiões de Xique-Xique. Todos os direitos reservados.</p>
                </div>
            </section>
        </main>
    `
};