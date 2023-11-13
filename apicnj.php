<?php 
// Código elaborado por Leonardo Marques Vilela - uso permitido - dúvidas: leonardo@leonardovilela.com
ini_set('display_errors', 1);
ini_set('log_errors', 1);
error_reporting(E_ALL);

?>
<!doctype html>
<html lang="pt-br">
    <head>
        
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.7/jquery.inputmask.min.js"></script>
        <script src='https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js'></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <script src="index.js?<?php echo time() ?>"></script>

        <title>Consulta processual</title>
    
<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-maskmoney/3.0.2/jquery.maskMoney.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/5.0.7/jquery.inputmask.min.js"></script>
<script src='https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js'></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<script src="index.js?<?php echo time() ?>"></script>


<form method="post" action="resultado.php">
    <h4>Consulta processos</h4>
    <input type="text" name="data[processo]" data-mascara="numero-cnj">
    <button type="submit">Enviar</button>
</form>


