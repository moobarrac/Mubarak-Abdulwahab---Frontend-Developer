<?php

class AuthService {
    // This is a hardcoded token for demonstration purposes only.
    private static $validToken = "my_authorised_testing_token";

    public static function validateToken($token) {
        return $token === self::$validToken;
    }
}

?>
