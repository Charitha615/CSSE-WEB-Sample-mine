package com.example.BusTracking.repository;

import com.example.BusTracking.model.BusTracking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusTrackingRepository extends JpaRepository<BusTracking,Integer> {
}
