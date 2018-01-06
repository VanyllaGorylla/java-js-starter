package com.vanyllagorylla.starter.model.dao;

import com.vanyllagorylla.starter.model.domain.Movie;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("movieDao")
public interface MovieDao extends CrudRepository<Movie, Long> {

}
