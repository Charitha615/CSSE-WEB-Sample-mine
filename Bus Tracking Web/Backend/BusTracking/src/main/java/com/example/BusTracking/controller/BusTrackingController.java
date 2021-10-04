package com.example.BusTracking.controller;

import com.example.BusTracking.model.BusTracking;
import com.example.BusTracking.service.BusTrackingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/BusTracking")
public class BusTrackingController {

    @Autowired
    private BusTrackingService busTrackingService;

    @PostMapping("/addCard")
    public BusTracking add(@RequestBody BusTracking busTracking){
        System.out.println("addCard");
        busTrackingService.saveStudent(busTracking);
        return (busTracking);
    }

    @GetMapping("/getAllCards")
    public List<BusTracking> getAllStudent(){
        return busTrackingService.getAllBusTracking();
    }

}
