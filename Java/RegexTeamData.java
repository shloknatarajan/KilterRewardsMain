import java.util.Scanner;
public class RegexTeamData {
	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);

		String[] teamData = new String[10];
		teamData[0] = "<h1>Missouri</h1> <h3>3658 Bosons</h3> <p>Eureka , MO</p> <p>Bio: Team of 7 years, been to the World Championship twice. We meet 2-3 times a week and like to keep things serious but relaxed.</p><p>Available For:</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4> <p>bosonsrobotics@gmail.com</p> <p>636-733-2121</p> <p></p> <h3>3592 Mesons</h3> <p>Eureka, MO</p> <p>Bio: Team from Eureka High School</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4> <p>636-733-2121</p> <h3> 3591 Quarks</h3> <p> Eureka, MO</p> <p>Bio: Hi we're the Quarks from Eureka High school in eureka Missouri! We are a team of 14 people and we love robotics!</p> <p>Available For: Shadowing, Mentoring</p> <h4>Contact Information</h4><p> quarks3591@gmail.com</p> <p></p> <p> Follow us @ quarks3591 on most social media!</p> <h3>6127 iBots</h3> <p>Wildwood, MO</p> <p>Bio:Creators of this website and happy to help! We are a private team that has been around for 4 years now and are made up of Lafayette and Marquette students.</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4> <p>6127ibotsftc@gmail.com or ftcconnect@gmail.com(Website)</p> <p></p> <h3>5118 Hadron</h3> <p>Wildwood, MO</p> <p>Bio: Lafayette High School team. Accepting members from anyone at Lafayette</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4> <p>twomblymelissa@rsdmo.org</p> <p>636-733-4100</p> <h3> 7951 Kaon</h3> <p> Wildwood, MO</p> <p>Bio: Lafayette High School team. Accepting members from anyone at Lafayette</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4><p> twomblymelissa@rsdmo.org or benneremily@rsdmo.org</p> <p> 636-733-4100</p> <p></p> <h3> 5248 Fermion</h3> <p> Wildwood, MO</p> <p>Bio: Lafayette High School team.</p> <p>Available For: Mentoring, Shadowing</p> <h4>Contact Information</h4><p> twomblymelissa@rsdmo.org or benneremily@rsdmo.org</p> <p> 636-733-4100</p> <p></p> ";
		//teamData[0] = "";
		//teamData[0] = "";
		String[] tags1 = {"\\s+<", "\\s+",">\\s+", "\\s+,","</h3>","</p>","</h4>","<p>", "<h4>"};
		String[] tags2 = {"<", " ",">", ",","</h3>\n","</p>\n", " </h4>\n","   <p>&nbsp;&nbsp;&nbsp;", "  <h4> "};

		for (int i = 0; i<9; i++) {
			teamData[i+1] = teamData[i].replaceAll(tags1[i],tags2[i]);
		}

		System.out.println(teamData[9]);

	}
}

/*String s2 = s1.replaceAll(">\\s+",">");
		String s3 = s2.replaceAll("\\s+<","<");
		String s4 = s3.replaceAll("\\s+"," ");
		String s5 = s4.replaceAll("\\s+,",",");
		String s6 = s5.replaceAll(">",hunna);
		System.out.println(s6);

		for (int i = 0; i < x; i++)
		{
			sh3index[i] = nthIndexOf(s4,"<h3>", i+1);
		}

		for (int i = 0; i < x; i++)
		{
			ch3index[i] = nthIndexOf(s4,"</h3>", i+1);
		}

		for (int i = 0; i < x; i++)
		{
			teamnames[i] = s4.substring(sh3index[i]-1,ch3index[i]);
		}



	}
	public static int nthIndexOf(String source, String sought, int n) {
	    int index = source.indexOf(sought);
	    if (index == -1) return -1;

	    for (int i = 1; i < n; i++) {
	        index = source.indexOf(sought, index + 1);
	        if (index == -1) return -1;
	    }
	    return index;
}
public static int nthIndexOf(final String string, final String token,
     final int index)
  {
     int j = 0;

     for (int i = 0; i < index; i++)
     {
        j = string.indexOf(token, j + 1);
        if (j == -1) break;
     }

     return j;
  }*/

