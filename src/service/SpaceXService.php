<?php
class SpaceXService {
    private $apiBaseUrl;

    public function __construct() {
        $this->apiBaseUrl = 'https://api.spacexdata.com/v3';
    }

    public function fetchCapsules($queryString) {
        $endpoint = '/capsules'.$queryString;
        return $this->makeApiRequest($endpoint);
    }

    private function makeApiRequest($endpoint) {
        $url = $this->apiBaseUrl . $endpoint;
        $json = file_get_contents($url);
        $data = json_decode($json, true);

        return $data;
    }
}
?>
