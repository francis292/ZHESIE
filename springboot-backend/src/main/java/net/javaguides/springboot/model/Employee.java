package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "hei_dbinfo")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "hei_name")
	private String heiName;

	@Column(name = "lp_name")
	private String lpName;
	
	@Column(name = "validity_period")
	private String validityPeriod;
	
	public Employee() {
		
	}
	
	public Employee(String HEI_Name, String lpName, String validityPeriod) {
		super();
		this.heiName = HEI_Name;
		this.lpName = lpName;
		this.validityPeriod = validityPeriod;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return heiName;
	}
	public void setFirstName(String heiName) {
		this.heiName = heiName;
	}
	public String getLastName() {
		return lpName;
	}
	public void setLastName(String lpName) {
		this.lpName = lpName;
	}
	public String getEmailId() {
		return validityPeriod;
	}
	public void setEmailId(String validityPeriod) {
		this.validityPeriod = validityPeriod;
	}
}
