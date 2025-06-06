<?php
// No momento da reserva, verifique se já existe reserva para esse usuário
session_start();
if (isset($_SESSION['reservou_macacao'])) {
    echo json_encode(['error' => 'Você já reservou este presente!']);
    exit;
}
// ...processa a reserva normalmente...
$_SESSION['reservou_macacao'] = true;