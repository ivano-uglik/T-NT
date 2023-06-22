const VideoSadrzaji = () => {
  return (
    <div>
      <h1 className="title">Video Sadržaji</h1>
      <div className="flex justify-center gap-8">
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube-nocookie.com/embed/5mSl1gRuvzQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube-nocookie.com/embed/tXH25y-7XPA"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
        ></iframe>
        <iframe
          width="420"
          height="236.25"
          src="https://www.youtube.com/embed/UcN7kTkGTv0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSadrzaji;
