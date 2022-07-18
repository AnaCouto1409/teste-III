# teste-III

<h1> Testing em pagina e estruturação de codigo em React.js</h1>

Existe também o tfoot, que define o footer de uma tabela. Para mais informações, consulte a documentação.

Podemos também definir quantas colunas ou linhas uma única célula (ou td/th) vai ocupar. Para isso, usamos os atributos colspan (para colunas) e rowspan (para linhas).

E CSS em tabelas?

Para estilizar nossas tabelas, é comum usar as propriedades de border, padding, text-align. Uma propriedade nova é a border-collapse, que não deixa as bordas adjacentes "duplicarem". Outra propriedade é o border-spacing, que define espaçamento entre células (só funciona para border-collapse: separate).

HTML	CSS
Tags de tabela: table, thead, tbody, th, td, tr	Propriedades de tabela: border-collapse, border-spacing
Propriedades de transformação: transform (translate, rotate, scale, skew)	
Aula 05 - Formulários
Formulário: tags e anatomia.
Formulários
Formulários são elementos de HTML que são utilizados para capturar dados dos usuários, através de campos de digitação ou seleção. Podemos capturar vários tipos de dados: texto (nome, sobrenome, profissão), números (idade, quantidade de filhos), email, escolhas pré-determinadas através de checkbox, radio e dropdown (assunto, formação escolar, interesses), textos maiores (comentário, feedback). Para isso, existem várias tags que usaremos no nosso form.

Anatomia básica de formulário
<form action="obrigada.html" method="GET">
    <input type="email" placeholder="Seu email">
    <input type="submit" value="Inscrever-se na Newsletter">
</form>
Na tag form, o atributo action define o que será feito após a submissão bem sucedida do formulário. A URL definida pode ser uma tela de agradecimento ou um script de execução para gravação de dados no backend. Se não há action, após submissão a mesma página será carregada. Além disso, o atributo method define qual o método de envio dos dados para o servidor. O valor pode ser GET ou POST.

Dentro do formulário, podem haver várias tags de captura de dados do usuário. As mais comuns são:

input email
<input type="email" name="email" placeholder="Seu email">
Captura o email do usuário. Quando se define o type="email", o próprio navegador faz uma verificação simples do input do dado. Tags de input são tags que não possuem fechamento (funcionam como a tag img). O atributo placeholder permite a adição de um texto explicativo sobre qual tipo de dado deve ser inserido no campo.

O atributo name está presente em todos os campos de inserção de dados do usuário e não devem ser esquecidos. Ele é uma informação fundamental para o envio de dados para o servidor.

input text
<input type="text" name="nome" placeholder="Seu nome">
Os inputs de type="text" aceitam todo tipo de textos curtos dentro deles. Portanto, pode-se capturar, por exemplo, nome, sobrenome, profissão etc do usuário.

input checkbox
<p>Selecione até 3 plantas</p>
<input type="checkbox" name="planta" value="alecrim"> Eu gosto de Alecrim
<input type="checkbox" name="planta" value="lavanda"> Eu gosto de Lavanda
<input type="checkbox" name="planta" value="zamioculca"> Eu gosto de Zamioculca
No input com type="checkbox", o usuário pode selecionar múltiplas opções. O name nas tags de input devem ser iguai para sinalizar que são relacionados. O atributo value mostra qual o valor será enviado para o backend.

input radio
<p>Selecione apenas 1 sabor de pizza</p>
<input type="radio" name="pizza" value="calabresa"> Eu gosto de Calabresa
<input type="radio" name="pizza" value="baiana"> Eu gosto de Baiana
<input type="radio" name="pizza" value="portuguesa"> Eu gosto de Portuguesa
No input com type="radio", o usuário pode selecionar apenas 1 opção. O name nas tags de input devem ser iguai para sinalizar que são relacionados. O atributo value mostra qual o valor será enviado para o backend.

select
<select name="assunto">
   <option value="contato">Contato</option>
   <option value="sugestao">Sugestão</option>
   <option value="critica">Crítica</option>
</select>
O select permite a apresentação de opções de dados a serem escolhidos pelo usuário. Dentro da tag select, deve-se determinar as opções através de tags option.

input number
<input type="number" name="idade">
No input com type="number", o usuário pode apenas digitar números. Com o hover do mouse, ele também consegue ver flechas para aumentar ou diminuir o número.

textarea
<textarea name="mensagem" cols="30" rows="10"></textarea>
Textarea é uma tag que permite a digitação de um texto maior por parte do usuário. Os atributos cols e rows são opcionais e definem o tamanho padrão da caixa de texto.

input submit
<input type="submit" value="Enviar Mensagem">
Tag necessária para que haja submissão do formulário. Trata-se de um botão que o usuário pode clicar para efetuar o ato de envio de form. O value, nesse caso, age como 'placeholder', definindo um texto que vai aparecer dentro do botão.

Label e atributos necessários dentro de tags de form
Label É também importante acompanhar as tags de input por outra tag que se chama label (etiqueta). Ela serve como auxiliar para informar ao usuário que tipo de dado é esperado dele.

<label for="name">Name</label>
<input type="text" name="name" placeholder="Seu nome">
O atributo 'for' (tradução: para) no label deve ter o mesmo valor do name do input correspondente.

Atributos importantes Dentro de toda tag de input, deve haver o atributo name. Isso é necessário para fazer a conexão para um possível script para o envio de dados. O atributo value é necessário em tags de opção - option, input type="checkbox, input type="radio. Isso porque o usuário não vai inserir dados diretamente no campo, mas selecionar a opção com valor pré-estabelecido. O atributo placeholder, em tags de input de texto e email, define um texto dentro do campo de dados que pode servir como dica para o usuário.

O atributo required é inserido em qualquer tag de input, select ou textarea, em que é obrigatório ser preenchido para que ocorra a submissão do formulário.

HTML
Tags de formulário: form, input, select, option, textarea
