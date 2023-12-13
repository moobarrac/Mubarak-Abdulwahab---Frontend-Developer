<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    exit(0);
}

require_once __DIR__ .'/src/service/SpaceXService.php';
require_once __DIR__ .'/src/service/AuthService.php';


$requestMethod = $_SERVER['REQUEST_METHOD'];
$parsedUrl = parse_url($_SERVER['REQUEST_URI']);
$path = $parsedUrl['path'];

$isAuthenticated = AuthService::validateToken(getBearerToken());

switch ($path) {
    case '/login':

        break;
    case '/capsules':
        if ($isAuthenticated && $requestMethod == 'GET') {
            handleCapsules();
        } else {
            echo json_encode(['error' => 'Unauthorized']);
            http_response_code(401);
        }
        break;
    default:
        echo json_encode(['error' => 'Route not found']);
        http_response_code(404);
        break;
}


function getBearerToken() {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $matches = [];
        preg_match('/Bearer\s(\S+)/', $headers['Authorization'], $matches);
        if (isset($matches[1])) {
            return $matches[1];
        }
    }
    return null;
}

function handleCapsules() {
    $status = $_GET['status'] ?? '';
    $original_launch = $_GET['original_launch'] ?? '';
    $type = $_GET['type'] ?? '';
    $offset = $_GET['offset'] ?? 0;
    $limit = $_GET['limit'] ?? 10;

    $queryParams = [];
    if (!empty($status)) {
        $queryParams['status'] = $status;
    }
    if (!empty($original_launch)) {
        $queryParams['original_launch'] = $original_launch;
    }
    if (!empty($type)) {
        $queryParams['type'] = $type;
    }
    if (!empty($offset)) {
        $queryParams['offset'] = $offset;
    }
    if (!empty($limit)) {
        $queryParams['limit'] = $limit;
    }
    $queryString = http_build_query($queryParams);

    try {
        $spaceXService = new SpaceXService();
        $capsules = $spaceXService->fetchCapsules('?' . $queryString);
        // return $capsules;
        echo json_encode($capsules);
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
        http_response_code(500);
    }
}
?>
