package Tests;

import Pages.MainPage;
import Pages.MusicPage;
import org.testng.Assert;
import org.testng.annotations.*;


public class MusicTests extends BaseTest{
    MusicPage musicPage;
    MainPage mainPage;

    @BeforeClass
    public void enter(){
        authorise();
        mainPage = new MainPage(page);
        musicPage = mainPage.openMusic();

    }

    @Test
    public void playMusic(){
        musicPage.setPlayMusic();
        Assert.assertNotEquals(musicPage.getMusicTime().getAttribute("current-time"), "0");
    }

    @Test
    public void openMyMusic(){
        musicPage.openMyMusic();
        Assert.assertTrue(musicPage.myMusicOpen());
    }

    @Test
    public void mute(){
        musicPage.offVolumeMusic();
        Assert.assertTrue(musicPage.noVolume());
    }

    @AfterClass
    public void logOut() {
        exit();
    }
}
