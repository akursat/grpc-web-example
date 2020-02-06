package main

import (
    "context"
    "log"
    "net"
    "google.golang.org/grpc"
    pb "github.com/akursat/grpc-country/countrypb"
)

const (
    port = ":50051"
)

type server struct {
    pb.UnimplementedCountryServiceServer
}

func(s * server) GetCountries(ctx context.Context, in * pb.GetCountriesRequest)( * pb.GetCountriesResponse, error) {
    log.Printf("Received GetCountriesRequest: %v", in )

    countries := [] * pb.Country {
        {
            Id: 1,
            Name: "Turkey",
            Flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        }, {
            Id: 2,
            Name: "Israel",
            Flag: "https://en.wikipedia.org/wiki/Flag_of_Israel#/media/File:Flag_of_Israel.svg",
        }, {
            Id: 2,
            Name: "Iran",
            Flag: "https://tr.wikipedia.org/wiki/%C4%B0ran#/media/Dosya:Flag_of_Iran.svg",
        }, {
            Id: 2,
            Name: "China",
            Flag: "https://tr.wikipedia.org/wiki/%C3%87in#/media/Dosya:Flag_of_the_People's_Republic_of_China.svg",
        },

    }
    return &pb.GetCountriesResponse {
        Countries: countries,
    }, nil

}

func(s * server) AddCountry(ctx context.Context, in * pb.AddCountryRequest)( * pb.AddCountryResponse, error) {
    log.Printf("Received AddCountryRequest: %v", in )

    return &pb.AddCountryResponse {
        Success: "Country added.",
    }, nil

}

func main() {
    log.Printf("Starting server: %v", port)
    lis, err := net.Listen("tcp", port)
    if err != nil {
        log.Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer()
    pb.RegisterCountryServiceServer(s, & server {})
    if err := s.Serve(lis);
    err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}
