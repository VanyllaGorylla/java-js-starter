package com.vanyllagorylla.starter.controllers.api;

import com.vanyllagorylla.starter.model.domain.Movie;
import com.vanyllagorylla.starter.model.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vanyllagorylla.starter.model.service.MovieService;

@RestController
@RequestMapping("/api/movies")
public class MovieRestController {

    @Autowired
    private MovieService movieService;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Movie> findall() {
        return movieService.findAll();
    }

}
